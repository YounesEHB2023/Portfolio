function sendEmail() {
	const templateParams = {
		name: document.getElementById("#name").value,
		email: document.getElementById("#email").value,
		message: document.getElementById("#message").value,
	};
	emailjs
		.send(service_18o8mc8, template_dkpyk39, templateParams)
		.then(() => alert("Message sent successfully"))
		.catch((err) => alert("Failed to send message"));
}
