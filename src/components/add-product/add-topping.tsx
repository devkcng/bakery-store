"use client";
import { addTopping } from "@/app/api/toppings/route";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Topping = {
  name: string;
  price: number;
};

const formSchema = z.object({
  price: z.number().min(1000, {
    message: "Price must be greater than 1,000 VNĐ.",
  }),
  toppingName: z.string(),
});
const AddTopping = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data:Topping = {
      name: values.toppingName,
      price: values.price,
    }
    console.log(data);
    try {
      await addTopping(data);
      console.log("Topping added successfully");

      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);

      form.reset();
    } catch (error) {
      console.error("Error adding topping:", error);
    }
  }
  return (
    <div className="flex flex-col items-center mt-16">
      <span className="text-3xl font-bold tracking-[0.2rem] text-center mb-5">
        Thêm Topping
      </span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-[400px] border-2 border-gray-400 border-solid p-5 rounded-xl  "
        >
          <FormField
            control={form.control}
            name="toppingName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên Topping</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập tên Topping" {...field} />
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
                <FormLabel>Giá {`(VNĐ)`}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nhập giá bán"
                    {...field}
                    type="number"
                    value={field.value || ""}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="inline-flex justify-center w-full">
            <Button type="submit" className="bg-primarycolor w-[50%]  ">
              Thêm
            </Button>
          </div>
        </form>
      </Form>{showSuccessMessage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <p className="text-xl font-bold">Thêm thành công</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTopping;
