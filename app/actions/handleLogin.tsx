export async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target); // Create FormData from the form
    try {
      const response = await login(formData);
      // Handle the response (e.g., redirect, show a message)
      console.log('Login successful:', response);
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Login failed:', error);
    }
  }