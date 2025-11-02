import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home-page/hero";
import { ProjectsSection } from "@/components/home-page/projects-section";
import WorkTimeline from "@/components/home-page/work-timeline";
import PostsStats from "@/components/home-page/posts-stats";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
	return (
		<section className="mt-10 px-4  container mx-auto">
			<Hero />
			<ProjectsSection />
			<WorkTimeline />
			<PostsStats />
		</section>
	);
}
