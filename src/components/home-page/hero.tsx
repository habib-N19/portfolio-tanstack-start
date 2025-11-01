import { Card, CardContent } from "../ui/card";


export function Hero() {
  return (
    <div className="border grid gap-1.5 place-items-center h-[60dvh] bg-primary-foreground grid-cols-7">
        <div className="col-span-5  border border-red-700 h-full w-full">

            
        </div>
        <div className="col-span-2 gap-4 p-4 flex flex-col border border-blue-700 w-full h-full ">
        <Card className="w-full h-full">
            <CardContent>

            </CardContent>
        </Card>
            <Card className="w-full h-full">
            <CardContent>

            </CardContent>
        </Card>
     </div>
    </div>
  )
}
