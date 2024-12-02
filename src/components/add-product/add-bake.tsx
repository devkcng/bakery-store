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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

  const [toppings, setToppings] = useState<{ name: string }[]>([]);

  const handleAddTopping = (toppingName: string) => {
    if (!toppings.find((topp) => topp.name === toppingName)) {
      setToppings([...toppings, { name: toppingName }]);
    }
  };
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const bakeData = {
      ...values,
      ingredients,
      toppings,
    };
    console.log(bakeData);
    // console.log("Ingredients:", ingredients);
  };

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
                  src="/imgs/bakery-images/browniesb.png"
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
              <input id="file" type="file" className="hidden" />
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
                      <SelectItem value="Bơ">Bơ</SelectItem>
                      <SelectItem value="Đường">Đường</SelectItem>
                      <SelectItem value="Sữa">Sữa</SelectItem>
                      <SelectItem value="Trứng">Trứng</SelectItem>
                      <SelectItem value="Bột mì">Bột mì</SelectItem>
                      <SelectItem value="Bột ca cao">Bột ca cao</SelectItem>
                      <SelectItem value="Muối">Muối</SelectItem>
                      <SelectItem value="Đường nâu">Đường nâu</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
                      <SelectItem value="Vani">Vani</SelectItem>
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
                      <SelectItem value="Nho khô">Nho khô</SelectItem>
                      <SelectItem value="Dâu tây">Dâu tây</SelectItem>
                      <SelectItem value="Hạnh nhân">Hạnh nhân</SelectItem>
                    </SelectContent>
                  </Select>
                  {/* Render selected toppings */}
                  <div className="w-full mt-4 space-y-4 ">
                    {toppings.map((topping) => (
                      <div
                        key={topping.name}
                        className="flex items-center gap-4"
                      >
                        <Input className="w-[100px]" value={topping.name} />
                      </div>
                    ))}
                  </div>
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
    </div>
  );
};

export default AddBake;
