import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";

export function Hero() {
	return (
		<div className="border grid gap-1.5 place-items-center h-[60dvh] bg-primary-foreground grid-cols-7">
			<div className="col-span-5 grid grid-rows-5 border  h-full w-full">
				<div className="row-span-2 grid grid-cols-8 border  w-full h-full items-center px-4 gap-4">
					<Avatar className="size-28 col-span-1 ">
						<AvatarImage src="https ://github.com/habib-N19.png" />
						<AvatarFallback>HN</AvatarFallback>
					</Avatar>
					<div className="col-span-3 border  w-full h-1/2"></div>
					<div className="col-span-4 border h-1/2 w-full"></div>
				</div>
			</div>
			<div className="col-span-2 gap-4 p-4 flex flex-col border w-full h-full ">
				<Card className="w-full h-full">
					<CardContent></CardContent>
				</Card>
				<Card className="w-full h-full">
					<CardContent></CardContent>
				</Card>
			</div>
		</div>
	);
}
