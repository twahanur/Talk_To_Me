const bcrypt = require("bcrypt");
const User = require("../models/People");

const superUser = {
  name: "Super User",
  email: "twahanur@gmail.com",
  mobile: "01708902648",
  password: "Twahanur@1",
  avatar: "",
  role: "admin",
};
const seedSuperAdmin = async () => {
  console.log("Authorizing....");
  //when database is connected, we will check is there any user who is super admin
  const isSuperAdminExits = await User.findOne({ role: "admin" });
  if (!isSuperAdminExits) {
    const hashedPassword = await bcrypt.hash(superUser.password, 10);
    const user = await new User({
      ...superUser,
      password: hashedPassword,
    });
  }
};
seedSuperAdmin();
