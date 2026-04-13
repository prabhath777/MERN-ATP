function Product(props) {
  const { userObj } = props

  return (
    <div className="w-full max-w-sm border rounded-xl p-4 bg-slate-900 text-white flex gap-4 items-center">

      <img src={userObj.image} alt={userObj.name} className="w-20 h-20 rounded-full object-cover" />

      <div>
        <h2 className="text-lg font-semibold">{userObj.name}</h2>
        <p className="text-sm text-slate-400">{userObj.email}</p>
      </div>

    </div>
  );
}

export default Product;