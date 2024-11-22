export default function index({data}) {
  console.log(data);
    return <div>index</div>;
}

export async function getServerSideProps(data) {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return {
      props:{
        data
      }
    }
  } catch (error) {
    console.log(error);
  }
}