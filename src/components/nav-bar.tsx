import * as React from "react";
import Image from "next/image";

import { Button } from "@/styles/components/ui/button";


export default function NavBar() {
  return (
    <div className="flex justify-between items-baseline">
      <div className="relative h-[49px] w-[183px]">
        <Image src="/wongnok-with-name-logo.png" alt="logo" fill />
      </div>
      <Button variant="ghost">เข้าสู่ระบบ</Button>
    </div>
  );
}
