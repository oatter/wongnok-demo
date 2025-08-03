import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/styles/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/styles/components/ui/avatar"

const RecipeCard = () => (
     <div>
      <h1 className="text-4xl font-bold">สูตรอาหารทั้งหมด</h1>
      <div>
        <Card className="max-w-[276px] max-h-[390px]">
          <CardContent>
            <div className="relative h-[158px] rounded-t-lg">
              <Image
                src="/beef_wellington.png"
                alt="beef wellington"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold">Beef Wellington</h3>
              <p className="font-regular text-secondary line-clamp-3">
                อยากทำเมนูอาหารต่างประเทศหรู ๆ กินเองที่บ้าน
                แต่ไม่รู้ว่าจะต้องซื้อหรือทำอะไรบ้าง กล่องนี้ ทำง่าย ครบ
                จบในกล่องเดียว
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex item-center">
              <div className="flex p-1 grow">
                <img src="/icons/av_timer.png" alt="" />
                <p>ยาก</p>
              </div>
              <div className="flex p-1 grow">
                <img src="/icons/level.png" alt="" />
                <p>60 +</p>
              </div>
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardFooter>
        </Card>
      </div>
    </div>
)

export default RecipeCard