import RecipeCard, { Recipe } from "@/components/recipe-card";

const Dashboard = () => {
  const data: Recipe[] = [
    {
      id: 1,
      name: "ขนมครก",
      description: "ขนมไทยโบราณ ทำจากกะทิและแป้ง ข้างนอกกรอบ ข้างในนุ่ม",
      ingredient: "กะทิ 100ml\nมะพร้าว 20g\nแป้งข้าวเจ้า 150g",
      instruction: "ผสมแป้งกับกะทิ\nหยอดลงเบ้า\nรอจนกรอบ\nตักเสิร์ฟ",
      imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84d",
      cookingDuration: {
        id: 1,
        name: "5 - 10",
      },
      difficulty: {
        id: 1,
        name: "Easy",
      },
      createdAt: "2025-08-03T10:00:00.000Z",
      updatedAt: "2025-08-03T10:00:00.000Z",
    },
    {
      id: 2,
      name: "ไก่ทอดน้ำปลา",
      description: "ไก่ทอดกรอบๆ หอมกลิ่นน้ำปลา ทานคู่ข้าวเหนียวอร่อยสุด",
      ingredient: "ปีกไก่ 500g\nน้ำปลา 2 ช้อนโต๊ะ\nพริกไทย",
      instruction: "หมักไก่กับน้ำปลาและพริกไทย\nทอดในน้ำมันร้อนจนกรอบ",
      imageUrl: "https://images.unsplash.com/photo-1585238341986-9b3b2c171f8a",
      cookingDuration: {
        id: 2,
        name: "10 - 20",
      },
      difficulty: {
        id: 1,
        name: "Easy",
      },
      createdAt: "2025-08-03T10:01:00.000Z",
      updatedAt: "2025-08-03T10:01:00.000Z",
    },
    {
      id: 3,
      name: "แกงเขียวหวานไก่",
      description: "เมนูไทยแท้ รสชาติเข้มข้นจากพริกแกงและกะทิ",
      ingredient:
        "พริกแกงเขียวหวาน 2 ช้อนโต๊ะ\nไก่ 300g\nมะเขือเปราะ\nกะทิ 250ml",
      instruction: "ผัดพริกแกงกับหัวกะทิ\nใส่ไก่และมะเขือ\nเคี่ยวจนสุก",
      imageUrl: "https://images.unsplash.com/photo-1605472569769-38ba74f4b4fd",
      cookingDuration: {
        id: 3,
        name: "20 - 30",
      },
      difficulty: {
        id: 2,
        name: "Medium",
      },
      createdAt: "2025-08-03T10:02:00.000Z",
      updatedAt: "2025-08-03T10:02:00.000Z",
    },
    {
      id: 4,
      name: "สลัดผักอโวคาโด",
      description: "เมนูสุขภาพที่รวมผักสดและอโวคาโดหอมมัน",
      ingredient: "ผักสลัดรวม\nอโวคาโด\nน้ำสลัดงาญี่ปุ่น",
      instruction: "หั่นส่วนผสมทั้งหมด\nคลุกกับน้ำสลัด\nเสิร์ฟทันที",
      imageUrl: "https://images.unsplash.com/photo-1572441710263-0f6b8e8b6221",
      cookingDuration: {
        id: 1,
        name: "5 - 10",
      },
      difficulty: {
        id: 1,
        name: "Easy",
      },
      createdAt: "2025-08-03T10:03:00.000Z",
      updatedAt: "2025-08-03T10:03:00.000Z",
    },
    {
      id: 5,
      name: "ต้มยำกุ้งน้ำข้น",
      description: "ต้มยำรสแซ่บ หอมสมุนไพร เข้มข้นด้วยนมสด",
      ingredient:
        "กุ้งแม่น้ำ 3 ตัว\nตะไคร้ ใบมะกรูด\nพริกขี้หนู\nน้ำมะนาว\nนมสด",
      instruction:
        "ต้มสมุนไพรกับน้ำ\nใส่กุ้ง ปรุงรสด้วยน้ำปลา น้ำมะนาว\nใส่นมสดตอนท้าย",
      imageUrl: "https://images.unsplash.com/photo-1626178795152-22807a22d2db",
      cookingDuration: {
        id: 2,
        name: "10 - 20",
      },
      difficulty: {
        id: 2,
        name: "Medium",
      },
      createdAt: "2025-08-03T10:04:00.000Z",
      updatedAt: "2025-08-03T10:04:00.000Z",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-bold pb-8">สูตรอาหารทั้งหมด</h1>
      <div className="flex flex-wrap gap-8 items-baseline">
        {data.map((recipe) => (
          <RecipeCard key={recipe.name} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};
export default Dashboard;
