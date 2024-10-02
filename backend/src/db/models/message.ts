import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../config/database";

const Message = sequelize.define("message", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
      allowNull: false,
    defaultValue: Date.now(),
  },
  updated_at: {
    type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now(),
  },
});

(async () => {
  await Message.sync();
  console.log("Message Model synced");
})();

export default Message;
