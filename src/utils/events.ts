declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      e: "event",
      action: string,
      variant_name: Record<string, string>,
    ) => void;
  }
}

interface Payload {
  screensaver: string;
  icon: string;
  background: string;
  bundle: string;
}

export const sendDataToGA = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycbzZOSpP029N4wPFH5BkOu5HSTeSIXjrdF8D-vVM0M8IgL5BKBpiGquOTGxWiRBF2NAx/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({
          date,
          variant: "ghk_5251_3",
          form_name: "forms_1",
          ...payload,
        }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};
