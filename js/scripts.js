window.formbutton =
  window.formbutton ||
  function() {
    (formbutton.q = formbutton.q || []).push(arguments);
  };
formbutton("create", {
  action: "https://formspree.io/f/mjvpeqll",
  title: "Contact Me",
  fields: [
    {
      type: "text",
      label: "Name:",
      name: "name",
    },
    {
      type: "email",
      label: "Email:",
      name: "email",
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
    },
    { type: "submit", value: "Send" }
  ],
  styles: {
    fontFamily: "Muli",
    modal: {
      border: "1px solid #6D6875",
      borderRadius: "0",
    },
    title: {
      padding: "24px 24px 0px 24px",
      background: "rgba(0,0,0,0)",
      color: "#2e2a37",
      fontFamily: "Muli",
      fontSize: "2em",
    },
    body: {
        padding: "16px 24px 24px",
    },
    field: {
      display: "flex",
    },
    submitField: {
      justifyContent: "flex-end",
    },
    label: {
      width: "40%",
    },
    checkboxLabel: {
      width: "auto",
    },
    input: {
      borderRight: "1px solid rgba(0,0,0,0.1)",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      borderRadius: "0px"
    },
    button: {
      background: "white",
      fill: "#6D6875",
      border: "1px solid #6D6875",
    },
    closeButton: {
      textShadow: "0 0 0 #2e2a37",
    }
  },
  initiallyVisible: true
});
