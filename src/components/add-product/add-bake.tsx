"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { fetchToppingsFromAPI } from "@/app/api/toppings/route";
import { fetchIngredientNamesFromAPI } from "@/app/api/warehouses/route";
import { addProduct } from "@/app/api/products/add-product/route";
import { addProductTopping } from "@/app/api/product-toppings/route";
import { getNumberOfProducts } from "@/app/api/products/route";
import { fetchCategoriesFromAPI } from "@/app/api/categories/route";

type Topping = {
  id: string;
  name: string;
};

type Category = {
  id: string;
  name: string;
};

const formSchema = z.object({
  price: z.number().min(1000, {
    message: "Giá bánh phải lớn hơn 1,000 VNĐ.",
  }),
  bakeName: z.string(),
  completeTime: z
    .number()
    .min(1, { message: "Thời gian hoàn thành bánh phải lớn hơn 1 phút" }),
  maxCapacity: z.number().min(1, { message: "Số lượng bánh tối đa lớn hơn 1" }),
});

const AddBake = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [ingredients, setIngredients] = useState<
    { name: string; quantity: number }[]
  >([]);

  const [ingredientNames, setIngredientNames] = useState<string[]>([]);

  const [toppings, setToppings] = useState<Topping[]>([]);

  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);

  const [categories, setCategories] = useState<Category[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<Category>();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>("/imgs/uploadPic.png");
  const [fileName, setFileName] = useState<string>("");
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Tạo URL tạm thời cho file
      setImageSrc(imageUrl);
      setFileName(file.name);
    }
  };

  useEffect(() => {
    const fetchIngredientNames = async () => {
      try {
        const data = await fetchIngredientNamesFromAPI();
        setIngredientNames(data);
      } catch (error) {
        console.error("Error fetching ingredient names:", error);
      }
    };

    const fetchToppings = async () => {
      try {
        const data = await fetchToppingsFromAPI();
        setToppings(data);
      } catch (error) {
        console.error("Error fetching topping names:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const data = await fetchCategoriesFromAPI();
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchIngredientNames();
    fetchToppings();
    fetchCategories();
  }, []);

  const handleAddIngredient = (ingredientName: string) => {
    if (!ingredients.find((ing) => ing.name === ingredientName)) {
      setIngredients([...ingredients, { name: ingredientName, quantity: 0 }]);
    }
  };

  const handleQuantityChange = (index: number, quantity: number) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].quantity = quantity;
    setIngredients(updatedIngredients);
  };

  const handleAddTopping = (value: string) => {
    const [toppingName, toppingId] = value.split("|");
    if (!selectedToppings.find((topp) => topp.name === toppingName)) {
      setSelectedToppings([
        ...selectedToppings,
        { name: toppingName, id: toppingId },
      ]);
    }
  };

  const handleAddCategory = (value: string) => {
    const [categoryName, categoryId] = value.split("|");
    setSelectedCategory({ name: categoryName, id: categoryId });
  };

  const createProductId = async () => {
    try {
      const numberOfProducts = await getNumberOfProducts();
      return numberOfProducts + 1;
    } catch (error) {
      console.error("Error creating product ID:", error);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const product_id = await createProductId();
    const bakeData = {
      id: product_id,
      name: values.bakeName,
      price: values.price,
      description: "Default description", // Add appropriate description
      category_id: Number(selectedCategory.id), // Add appropriate category_id
      img_path: `/imgs/bakery-images/${fileName}`, // Add appropriate img_path
      max_daily_quantity_limit: 100, // Add appropriate max_daily_quantity_limit
      product_capacity_per_batch: values.maxCapacity,
    };
    console.log(bakeData);
    // console.log("Ingredients:", ingredients);

    try {
      await addProduct(bakeData);
      console.log("Product added successfully");

      for (const topping of selectedToppings) {
        const productTopping = {
          product_id: Number(product_id),
          topping_id: Number(topping.id),
        };
        await addProductTopping(productTopping);
      }

      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
      setImageSrc("/imgs/uploadPic.png");
      form.reset({
        price: 0,
        bakeName: "",
        completeTime: 0,
        maxCapacity: 0,
      });
      setIngredients([]);
      setSelectedToppings([]);
      setSelectedCategory(undefined);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  console.log(imageSrc.toString());
  console.log(fileName);
  return (
    <div className="flex flex-col items-center mt-5 ">
      <span className="text-3xl font-bold tracking-[0.2rem] text-center mb-5">
        Thêm bánh
      </span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-[1100px] h-auto  border-2 border-gray-400 border-solid p-5 rounded-xl"
        >
          <div className="flex justify-around items-center">
            {/* Upload image for bake section */}

            <div className="h-[300px] w-[300px] rounded-lg shadow-[4px_4px_30px_rgba(0,0,0,0.2)] flex flex-col items-center justify-between p-2.5 gap-1.5 ">
              <div className="flex-1 w-full border-2 border-dashed border-royalblue rounded-lg flex flex-col items-center justify-center">
                <img
                  src={imageSrc}
                  alt="Hello"
                  className="object-cover w-[135px] h-[135px]"
                />
              </div>

              <label
                htmlFor="file"
                className="bg-tertiarycolor w-full h-[40px] px-2 rounded-lg cursor-pointer flex items-center justify-end text-black border-none"
              >
                <p className="flex-1 text-center">Chọn ảnh</p>
              </label>
              <input
                id="file"
                type="file"
                className="hidden"
                onChange={handleImageChange}
                accept="image/*"
              />
            </div>
            {/* Information of bake section */}

            <div>
              {/* Name and Price section */}
              <div className="flex justify-around">
                <FormField
                  control={form.control}
                  name="bakeName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tên Bánh</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nhập tên bánh"
                          {...field}
                          className="w-[250px] mr-20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Giá {`(VNĐ)`}/cái</FormLabel>
                      <FormControl>
                        <Input
                          className="w-[250px]"
                          placeholder="Nhập giá bán"
                          {...field}
                          type="number"
                          value={field.value || ""}
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Complete time and Max capacity section */}
              <div className="flex justify-around mt-2">
                <FormField
                  control={form.control}
                  name="completeTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Thời gian hoàn thành {`(phút)`}</FormLabel>
                      <FormControl>
                        <Input
                          className="w-[250px] mr-20"
                          placeholder="Nhập số phút"
                          {...field}
                          type="number"
                          value={field.value || ""}
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="maxCapacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Số lượng tối đa / mẻ </FormLabel>
                      <FormControl>
                        <Input
                          className="w-[250px]"
                          placeholder="Nhập số lượng"
                          {...field}
                          type="number"
                          value={field.value || ""}
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-between mt-2">
                {/* Ingredients of recipe section */}
                <div className="flex flex-col items-start mt-2">
                  <FormLabel className="mb-5">Nguyên liệu</FormLabel>
                  <Select onValueChange={handleAddIngredient} value="">
                    <SelectTrigger className="w-[250px] ml-0">
                      <SelectValue placeholder="+ Thêm nguyên liệu" />
                    </SelectTrigger>
                    <SelectContent>
                      {ingredientNames.map((ingredient) => (
                        <SelectItem key={ingredient.id} value={ingredient.name}>
                          {ingredient.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {/* Render selected ingredients */}
                  <div className="w-full mt-4 space-y-4 ">
                    {ingredients.map((ingredient, index) => (
                      <div
                        key={ingredient.name}
                        className="flex items-center gap-4"
                      >
                        <FormLabel className="w-[128px]">
                          {ingredient.name}
                        </FormLabel>
                        <Input
                          placeholder="Nhập số lượng"
                          className="w-[100px]"
                          value={ingredient.quantity}
                          type="number"
                          onChange={(e) =>
                            handleQuantityChange(index, e.target.valueAsNumber)
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Toppings section */}
                <div className="flex flex-col items-start mt-2">
                  <FormLabel className="mb-5">Toppings</FormLabel>
                  <Select onValueChange={handleAddTopping} value="">
                    <SelectTrigger className="w-[250px]">
                      <SelectValue placeholder="+ Chọn loại Toppings" />
                    </SelectTrigger>
                    <SelectContent>
                      {toppings.map((topping) => (
                        <SelectItem
                          key={topping.id}
                          value={`${topping.name}|${topping.id}`}
                        >
                          {topping.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {/* Render selected toppings */}
                  <div className="w-full mt-4 space-y-4 ">
                    {selectedToppings.map((topping) => (
                      <div
                        key={topping.name}
                        className="flex items-center gap-4"
                      >
                        <Input
                          className="w-[100px]"
                          value={topping.name}
                          readOnly
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Category section */}
              <div className="flex flex-col items-start mt-2">
                <FormLabel className="mb-5">Danh mục</FormLabel>
                <Select onValueChange={handleAddCategory} value="">
                  <SelectTrigger className="w-[250px]">
                    <SelectValue placeholder="+ Chọn danh mục" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem
                        key={category.id}
                        value={`${category.name}|${category.id}`}
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {/* Render selected category */}
                <div className="w-full mt-4 space-y-4 ">
                  {selectedCategory && (
                    <div className="flex items-center gap-4">
                      <Input
                        className="w-[100px]"
                        value={selectedCategory.name}
                        readOnly
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex justify-center w-full">
            <Button type="submit" className="bg-primarycolor w-[50%]">
              Thêm
            </Button>
          </div>
        </form>
      </Form>
      {showSuccessMessage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <p className="text-xl font-bold">Thêm thành công</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBake;
