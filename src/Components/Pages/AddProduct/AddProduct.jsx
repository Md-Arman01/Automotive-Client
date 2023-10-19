/* eslint-disable react/no-unescaped-entities */
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoURL = form.photoURL.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const addProduct = {
      photoURL,
      name,
      brand,
      type,
      price,
      rating,
      description,
    };
    console.log(addProduct);
    fetch(
      `http://localhost:5000/products`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          Swal.fire({
            title: "Success!",
            text: "Added new product successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="container mx-auto mt-16">
      <div className="card flex-1 mb-7 bg-[#fcedf1] border shadow-md p-12 rounded-md">
        <div>
          <h1 className="text-[#3D506E] text-4xl text-center font-rancho font-semibold mb-3">
            Add Product
          </h1>
          <p className="text-center mx-auto w-[900px] text-[#969494]">
            However, I'll need more information about the specific product you
            have in mind. Please provide details about the product, its
            category, and any unique features or benefits you'd like to
            emphasize
          </p>
        </div>

        <form onSubmit={handleAddProduct}>
          <h1 className="text-lg font-medium mb-2">PhotoURL</h1>
          <input
            type="text"
            name="photoURL"
            required
            placeholder="Enter photoURL"
            className="input input-bordered w-full"
          />
          <div className="grid grid-cols-2 gap-5 my-5">
            <div>
              <h1 className="text-lg font-medium mb-2">Name</h1>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Product name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <h1 className="text-lg font-medium mb-2">Brand Name</h1>
              <select name="brand" className="select select-bordered w-full">
                <option disabled selected>
                Choice Brand Name?
                </option>
                <option>Toyota</option>
                <option>Ford</option>
                <option>Bmw</option>
                <option>Mercedes-Benz</option>
                <option>Tesla</option>
                <option>Honda</option>
              </select>
            </div>
            <div>
              <h1 className="text-lg font-medium mb-2">Type</h1>
              <input
                type="text"
                name="type"
                required
                placeholder="Enter Product Type"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <h1 className="text-lg font-medium mb-2">Price</h1>
              <input
                type="text"
                name="price"
                required
                placeholder="Enter Product Price"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <h1 className="text-lg font-medium mb-2">Rating</h1>
              <select name="rating" className="select select-bordered w-full">
                <option disabled selected>
                Choice Rating?
                </option>
                <option>1</option>
                <option>2</option>
                <option>2.5</option>
                <option>3</option>
                <option>3.5</option>
                <option>4</option>
                <option>4.5</option>
                <option>5</option>
              </select>
            </div>
            <div>
              <h1 className="text-lg font-medium mb-2">Description</h1>
              <input
                type="text"
                name="description"
                required
                placeholder="Enter Product Short Description"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <input
            className="w-full mt-7 bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent text-white font-rancho mx-auto normal-case block select-none rounded-lg  py-3 px-6 text-center align-middle  text-2xl shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:cursor-pointer hover:shadow-[#FFA828]/40 active:opacity-[0.85] hover:translate-y-1 hover:transition-transform disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
