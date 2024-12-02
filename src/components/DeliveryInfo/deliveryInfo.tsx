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
import { useRouter } from "next/navigation";

// Định nghĩa schema validation với Zod
const deliverySchema = z.object({
  fullName: z.string().min(1, { message: "Họ và tên người nhận là bắt buộc." }),
  streetName: z.string().min(1, { message: "Tên đường là bắt buộc." }),
  district: z.string().min(1, { message: "Quận là bắt buộc." }),
  ward: z.string().min(1, { message: "Phường là bắt buộc." }),
  phoneNumber: z
    .string()
    .min(10, { message: "Số điện thoại phải có ít nhất 10 chữ số." }),
  note: z.string().optional(),
});

const DeliveryInfo = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof deliverySchema>>({
    resolver: zodResolver(deliverySchema),
  });

  // Hàm xử lý submit form
  function onSubmit(values: z.infer<typeof deliverySchema>) {
    // Lưu thông tin vào localStorage
    localStorage.setItem("deliveryInfo", JSON.stringify(values));
    console.log(values);
    // Chuyển hướng đến trang thanh toán sau khi lưu thông tin vào localStorage
    router.push("/payment");
  }

  return (
    <div>
      <div className="deliveryInfoContainer flex flex-col items-center">
        <div className="text-3xl font-bold tracking-wide mt-5 mb-5">
          Thông tin giao hàng
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-1 w-[350px]"
          >
            {/* Tên người nhận */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên người nhận</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập tên người nhận" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Tên đường */}
            <FormField
              control={form.control}
              name="streetName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên đường</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập tên đường" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Quận */}
            <FormField
              control={form.control}
              name="district"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quận</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập quận" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phường */}
            <FormField
              control={form.control}
              name="ward"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phường</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập phường" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Số điện thoại */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số điện thoại</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập số điện thoại" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Ghi chú */}
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ghi chú (tùy chọn)</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập ghi chú (nếu có)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Nút submit */}
            <div className="inline-flex justify-center w-full">
              <Button className="bg-primarycolor w-[50%] mt-3 mb-3">
                Tiếp tục
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default DeliveryInfo;
