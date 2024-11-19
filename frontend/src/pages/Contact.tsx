import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  name: string;
  phone: string;
  city: string;
  email: string;
  note: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-lg font-bold uppercase mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold">
              Họ tên *
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-gray-400"
              placeholder="Tên của bạn"
              {...register("name", { required: "Họ tên là bắt buộc." })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold">
              Số điện thoại *
            </label>
            <input
              type="text"
              id="phone"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-gray-400"
              placeholder="Số điện thoại"
              {...register("phone", {
                required: "Số điện thoại là bắt buộc.",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Số điện thoại phải đủ 10 chữ số.",
                },
              })}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-semibold">
              Tỉnh / Thành phố *
            </label>
            <input
              type="text"
              id="city"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-gray-400"
              placeholder="Tỉnh/Thành phố"
              {...register("city", { required: "Tỉnh / Thành phố là bắt buộc." })}
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold">
              Địa chỉ email *
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-gray-400"
              placeholder="Email"
              {...register("email", {
                required: "Email là bắt buộc.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Email không hợp lệ.",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="note" className="block text-sm font-semibold">
            Thông tin bổ sung
          </label>
          <textarea
            id="note"
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-gray-400"
            placeholder="Ghi chú về đơn hàng (tùy chọn)"
            {...register("note")}
          />
        </div>

        <button type="submit" className="w-full bg-black text-white py-3 uppercase font-bold hover:bg-gray-800 transition">
          LIÊN HỆ
        </button>
      </form>
    </div>
  );
};

export default Contact;
