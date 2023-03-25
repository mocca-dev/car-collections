import Layout from '../../components/layout';
import Select from '../../components/select';
import TextField from '../../components/text-field';
import styles from './new.module.css';

const New = ({ categories, brands }) => {
  const headerSettings = {
    showLeft: true,
    showCenter: true,
    showRight: true,
    showLogout: false,
    title: 'New Car',
  };

  // id               String    @id @default(cuid())
  // name             String
  // brand            Brand?    @relation(fields: [brandId], references: [id])
  // brandId          String
  // description      String
  // image            String

  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    // Get data from the form.
    const data = {
      name: event.target.title.value,
      image: event.target.picture.value, //'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
      brandId: 'clevlwiwp000a297eiomhcwcv', //event.target.category.value,
      description: event.target.description.value,
      categoryId: 'clevkz65c0002297e5deqxlv0', //event.target.category.value,
    };
    console.log('ADASD', data);
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/new-form';

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
    try {
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options);

      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json();
      alert(`New car posted. ${result.name}`);
    } catch (error) {
      console.error(error);
    }
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
        <Select list={categories} label="Categories" />
        <Select list={brands} label="Brands" />
        <TextField
          label="Description"
          name="description"
          placeholder="Enter some details about the car..."
          isTextarea={true}
        />
        <button className={styles.submit} type="submit">
          Post Car
        </button>
      </form>
    </Layout>
  );
};

export default New;

export const getStaticProps = async () => {
  const categories = await prisma.category.findMany();
  const brands = await prisma.brand.findMany();
  console.log('BRAND', brands);
  return {
    props: { categories, brands }, // will be passed to the page component as props
  };
};
