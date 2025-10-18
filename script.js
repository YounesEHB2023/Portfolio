const SERVICE_ID = "service_18o8mc8"; // e.g. "service_18o8mc8"
const TEMPLATE_ID = "template_dkpyk39";

function sendEmail() {
	const templateParams = {
		name: document.getElementById("name").value || "",
		email: document.getElementById("email").value || "",
		subject: document.getElementById("subject").value || "",
		message: document.getElementById("message").value || "",
	};

	// ensure emailjs is loaded
	if (!window.emailjs) {
		alert("EmailJS not loaded");
		return;
	}

	emailjs
		.send(SERVICE_ID, TEMPLATE_ID, templateParams)
		.then(() => {
			alert("Message sent successfully");
			// clear form
			document.getElementById("name").value = "";
			document.getElementById("email").value = "";
			document.getElementById("subject").value = "";
			document.getElementById("message").value = "";
		})
		.catch((err) => {
			console.error("EmailJS error:", err);
			alert("Failed to send message");
		});
}

window.sendEmail = sendEmail;
