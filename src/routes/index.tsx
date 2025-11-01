import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home-page/hero";
import { ProjectsSection } from "@/components/home-page/projects-section";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
	return (
		<section className="mt-10 px-4  container mx-auto">
			<Hero />
			<ProjectsSection />
		</section>
	);
}
