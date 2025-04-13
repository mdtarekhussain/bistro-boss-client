import React from "react";
import Section from "../../../../Component/Section/Section";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosLocal from "../../../../Hooks/useAxiosLocal";
import useAxios from "../../../../Hooks/useAxios";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_BB;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItemsDashCard = () => {
  const axiosLocal = useAxiosLocal();
  const axiosSecure = useAxios();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosLocal.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          icon: "success",
          title: `${data.name} Item Ad to  Menu Cart`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <Section heading="Add to Item" subHeading="What's now ?"></Section>
      <div className=" p-8 bg-[#F3F3F3] mt-5 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="from-control w-full my-5">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-[18px] font-semibold">
                Recipe Name?
              </legend>
              <input
                {...register("firstName", { required: true })}
                type="text"
                required
                className="input w-full"
                placeholder="Recipe name"
              />
            </fieldset>
          </div>
          <div className="flex gap-12 my-5">
            {/* category */}

            <div className="from-control w-full">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-[18px] font-semibold">
                  Category?
                </legend>

                <select
                  {...register("Category", { required: true })}
                  defaultValue="Select a Category"
                  required
                  className="select select-success w-full "
                >
                  <option disabled={true}>Select a Category</option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drink">Drink</option>
                </select>
              </fieldset>
            </div>
            {/* price */}
            <div className="from-control w-full">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-[18px] font-semibold">
                  Price?
                </legend>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  required
                  className="input w-full"
                  placeholder="Price"
                />
              </fieldset>
            </div>
          </div>
          {/* text Arya */}
          <textarea
            {...register("recipe", { required: true })}
            type="text"
            required
            placeholder="Success"
            className="textarea textarea-success w-full"
          ></textarea>
          <div className="mt-3">
            <input
              {...register("image", { required: true })}
              required
              type="file"
              className="file-input file-input-secondary"
            />
          </div>
          <button className="btn mt-3 bg-[#835D23] text-[18px]">
            {" "}
            Add Item <FaUtensils className="ml-2"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItemsDashCard;
