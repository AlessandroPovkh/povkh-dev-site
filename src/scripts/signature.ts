for (const signature of document.querySelectorAll<HTMLElement>("[data-signature]")) {
  const options = [...signature.querySelectorAll<HTMLButtonElement>("[data-signature-option]")];
  const active = signature.querySelector<HTMLElement>("[data-signature-active]");
  const result = signature.querySelector<HTMLElement>("[data-signature-result]");
  const cta = signature.querySelector<HTMLAnchorElement>("[data-signature-cta]");
  const steps = [...signature.querySelectorAll<HTMLElement>("[data-signature-step]")];
  const isRu = document.documentElement.lang === "ru";

  for (const option of options) {
    option.addEventListener("click", () => {
      for (const candidate of options) candidate.setAttribute("aria-pressed", String(candidate === option));
      if (active) active.textContent = `${option.textContent?.replace(/^\s*\d+\s*/, "").trim()} ${isRu ? "выбрано" : "selected"}`;
      if (result) result.textContent = option.dataset.result ?? "";
      const nextSteps = JSON.parse(option.dataset.steps ?? "[]") as string[];
      steps.forEach((step, index) => { step.textContent = nextSteps[index] ?? ""; });
      if (cta) {
        cta.textContent = option.dataset.cta ?? "";
        cta.href = option.dataset.href ?? cta.href;
      }
    });
  }
}
