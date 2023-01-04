import Layout from '../../components/layout';
import TextField from '../../components/text-field';
import styles from './new.module.css';

const New = () => {
  const headerSettings = {
    showLeft: true,
    showCenter: true,
    showRight: true,
    showLogout: false,
    title: 'New Car',
  };

  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/form';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
  };

  return (
    <Layout headerSettings={headerSettings}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          placeholder="Enter a title for the post..."
        />
        <TextField
          label="In collection since"
          name="date"
          placeholder="Enter the date since in collection..."
        />
        <TextField
          label="Picture"
          name="picture"
          placeholder="Enter a URL of the car picture..."
        />
        <TextField
          label="Description"
          name="description"
          placeholder="Enter some details about the car..."
        />
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default New;
