/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { Link } from "@tanstack/react-router";
import {
	ExternalLink,
	Gift,
	GitBranch,
	GitCommitIcon,
	Github,
	Link as LinkIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
export function ProjectsSection() {
	return (
		<section className="border grid gap-1.5 place-items-center  bg-primary-foreground grid-cols-7">
			<div className="col-span-5">
				<h1>Projects</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
					{Array.from({ length: 4 }).map((_, index) => (
						<Card key={index} className="p-4">
							<CardHeader>
								<CardTitle>Project Name {index + 1}</CardTitle>
								<CardDescription className="flex gap-2">
									<GitBranch />
									<GitBranch />
									<GitBranch />
									<GitCommitIcon />
									<GitCommitIcon />
									<GitCommitIcon />
								</CardDescription>
								<CardAction className="flex gap-1">
									<Github />
									<LinkIcon />
									<ExternalLink />
								</CardAction>
							</CardHeader>
							<CardContent>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Repellendus hic corporis ea voluptate soluta suscipit vero,
									amet iure, eligendi doloremque quaerat, nisi neque.
									Dignissimos, possimus!
								</p>
							</CardContent>
							<CardFooter>{/* <p>Card Footer</p> */}</CardFooter>
						</Card>
					))}
				</div>
				<Link to="/projects" className="mt-4 ">
					<Button variant="default">Projects</Button>
				</Link>
			</div>
			<div className="col-span-2  grid border grid-cols-4 gap-2">
				{Array.from({ length: 24 }).map((_, index) => (
					<Gift key={index} size={48} />
				))}
			</div>
		</section>
	);
}
