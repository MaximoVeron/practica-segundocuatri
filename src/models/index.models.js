import User from "./users.models.js";
import Task from "./tasks.models.js";
import Like from "./likes.models.js";

// Relaciones uno a muchos
User.hasMany(Task, {
    foreignKey: "user_id",
    sourceKey: "id"
});
Task.belongsTo(User, {
    foreignKey: "user_id",
    targetKey: "id"
});

// Relaciones muchos a muchos para likes
User.belongsToMany(Task, { through: Like, foreignKey: "user_id", otherKey: "task_id" });
Task.belongsToMany(User, { through: Like, foreignKey: "task_id", otherKey: "user_id" });

export { User, Task, Like };