import React from "react";

const DetailProduct = ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  return <div>Hello {params.id}</div>;
};

export default DetailProduct;
