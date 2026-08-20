for (const shell of document.querySelectorAll<HTMLElement>("[data-project-brief]")) {
  const form = shell.querySelector<HTMLFormElement>("[data-brief-form]");
  const steps = [...shell.querySelectorAll<HTMLFieldSetElement>("[data-brief-step]")];
  const progress = shell.querySelector<HTMLElement>("[data-brief-progress]");
  const error = shell.querySelector<HTMLElement>("[data-brief-error]");
  const success = shell.querySelector<HTMLElement>("[data-brief-success]");
  const submit = shell.querySelector<HTMLButtonElement>("[data-submit]");
  const startedAt = shell.querySelector<HTMLInputElement>("[data-started-at]");
  const token = shell.querySelector<HTMLInputElement>("[data-idempotency-key]");
  const errorCopy = shell.querySelector<HTMLTemplateElement>("[data-error-copy]");
  const demoMode = shell.dataset.deliveryMode === "demo";
  let current = 0;
  let sending = false;

  if (!form || steps.length !== 3 || !progress || !error || !success || !submit || !startedAt || !token) continue;

  startedAt.value = String(Date.now());
  token.value = crypto.randomUUID();

  const showStep = (index: number) => {
    current = Math.max(0, Math.min(steps.length - 1, index));
    steps.forEach((step, stepIndex) => { step.hidden = stepIndex !== current; });
    progress.textContent = `${current + 1} / ${steps.length}`;
    progress.setAttribute("aria-valuenow", String(current + 1));
    steps[current].querySelector<HTMLElement>("input, textarea, select")?.focus();
  };

  const validStep = () => {
    for (const control of steps[current].querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("input, textarea, select")) {
      if (!control.checkValidity()) {
        control.reportValidity();
        control.focus();
        return false;
      }
    }
    return true;
  };

  for (const next of shell.querySelectorAll<HTMLButtonElement>("[data-next]")) {
    next.addEventListener("click", () => { if (validStep()) showStep(current + 1); });
  }
  for (const back of shell.querySelectorAll<HTMLButtonElement>("[data-back]")) {
    back.addEventListener("click", () => showStep(current - 1));
  }

  const send = async () => {
    if (sending || !form.reportValidity()) return;
    sending = true;
    submit.disabled = true;
    error.hidden = true;

    if (demoMode) {
      form.hidden = true;
      progress.hidden = true;
      success.hidden = false;
      success.focus();
      sending = false;
      return;
    }

    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    Object.assign(payload, {
      consent: data.has("consent"),
      startedAt: Number(data.get("startedAt")),
    });

    let category = "delivery_unavailable";
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await response.json() as { category?: string };
      category = body.category ?? category;
      if (response.ok && category === "accepted") {
        form.hidden = true;
        progress.hidden = true;
        success.hidden = false;
        success.focus();
        return;
      }
    } catch {
      category = "delivery_unavailable";
    } finally {
      sending = false;
      submit.disabled = false;
    }

    const message = category === "rate_limited"
      ? errorCopy?.dataset.rate
      : category === "validation_error"
        ? errorCopy?.dataset.invalid
        : errorCopy?.dataset.default;
    error.textContent = message ?? "Delivery unavailable";
    error.hidden = false;
    error.focus();
    submit.textContent = submit.dataset.retryLabel ?? "Retry";
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    void send();
  });
  if (demoMode) submit.addEventListener("click", () => { void send(); });
  showStep(0);
}
