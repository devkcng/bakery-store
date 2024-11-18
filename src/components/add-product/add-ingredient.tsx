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
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const formSchema = z.object({
  price: z.number().min(1000, {
    message: "Price must be greater than 1,000 VNĐ.",
  }),
  ingredientName: z.string(),
  ingredientID: z.string(),
  ingredientUnit: z.string(),
  quantity: z.number().min(1, {
    message: "Quantity must be greater than 1",
  }),
});
const AddIngredient = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: 0,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex flex-col items-center mt-16">
      <span className="text-3xl font-bold tracking-[0.2rem] text-center mb-5">
        Nhập nguyên liệu
      </span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-[450px] border-2 border-gray-400 border-solid p-5 rounded-xl  "
        >
          {/* Dropdown list ingredient and ingredient id */}
          <div className="flex justify-between">
            <div className="w-[220px]">
              <FormField
                control={form.control}
                name="ingredientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên nguyên liệu</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập tên nguyên liệu" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-[150px]">
              <FormField
                control={form.control}
                name="ingredientID"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mã nguyên liệu</FormLabel>
                    <FormControl>
                      <Input placeholder="Mã nguyên liệu" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          {/* Price and unit */}
          <div className="flex justify-between ">
            <div className="w-[220px]">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Giá thành {`(VNĐ)`} / Đơn vị</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nhập nhập vào"
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
            </div>
            <div>
              <FormField
                control={form.control}
                name="ingredientUnit" // Tên trường phải trùng với tên trong schema
                render={({ field }) => (
                  <FormItem>
                    <div className="mb-[8px]">
                      <FormLabel>Đơn vị</FormLabel>
                    </div>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange} // Cập nhật giá trị khi người dùng chọn
                        value={field.value} // Giá trị được đồng bộ với react-hook-form
                      >
                        <SelectTrigger className="w-[150px]">
                          <SelectValue placeholder="Chọn đơn vị" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gram">gram</SelectItem>
                          <SelectItem value="ml">ml</SelectItem>
                          <SelectItem value="cái">cái</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage /> {/* Hiển thị thông báo lỗi nếu có */}
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số lượng</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nhập số lượng"
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
              Nhập
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddIngredient;
