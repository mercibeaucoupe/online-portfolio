import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import project1 from '@/assets/ordrly.png'
import project2 from '@/assets/project-2.jpg'
import project3 from '@/assets/project-3.jpg'

const Projects = () => {
	const projects = [
		{
			title: 'Restaurant Ordering System',
			description:
				'Built a cloud-native POS and QR ordering app (Angular, AWS) with secure authentication, real-time AWS IoT printer integration, and payment processing. Developed inventory management and admin dashboards, streamlining menu updates, analytics, and restaurant operations.',
			image: project1,
			technologies: ['Angular', 'Node.js', 'Stripe', 'AWS'],
			github: '',
			live: 'https://dev.ordr.ly',
			featured: true,
		},
		{
			title: 'New User Onboarding Dashboard',
			description:
				'Collaborative project management tool with real-time updates, task tracking, team collaboration features, and comprehensive reporting capabilities.',
			image: project2,
			technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io', 'Docker'],
			github: '#',
			live: '#',
			featured: true,
		},
		{
			title: 'Real-time Chat Application',
			description:
				'Modern chat application with instant messaging, file sharing, group chats, and end-to-end encryption for secure communication.',
			image: project3,
			technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
			github: '#',
			live: '#',
			featured: false,
		},
	]

	return (
		<section id="projects" className="py-20 bg-gradient-secondary">
			<div className="container mx-auto px-6">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							A showcase of my recent work, demonstrating expertise in full-stack development, UI/UX
							design, and modern web technologies.
						</p>
					</div>

					{/* Projects Grid */}
					<div className="space-y-12">
						{projects.map((project, index) => (
							<Card
								key={index}
								className={`overflow-hidden bg-card/50 border-primary/20 hover:shadow-card transition-all duration-500 ${
									project.featured ? 'lg:h-96' : ''
								}`}
							>
								<div
									className={`grid ${project.featured ? 'lg:grid-cols-2' : 'md:grid-cols-2'} gap-0 h-full`}
								>
									{/* Project Image */}
									<div className="relative overflow-hidden group">
										<img
											src={project.image}
											alt={project.title}
											className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
										{project.featured && (
											<Badge className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground">
												Featured
											</Badge>
										)}
									</div>

									{/* Project Content */}
									<div className="p-8 flex flex-col justify-between">
										<div className="space-y-4">
											<h3 className="text-2xl font-bold text-primary">{project.title}</h3>
											<p className="text-muted-foreground leading-relaxed">
												{project.description}
											</p>

											{/* Technologies */}
											<div className="flex flex-wrap gap-2">
												{project.technologies.map((tech, techIndex) => (
													<Badge
														key={techIndex}
														variant="outline"
														className="border-primary/50 text-primary"
													>
														{tech}
													</Badge>
												))}
											</div>
										</div>

										{/* Project Links */}
										<div className="flex gap-4 pt-6">
											<span hidden={!project.github}>
												<Button
													variant="outline"
													size="sm"
													className="border-primary/50 hover:bg-primary/10 group"
												>
													<Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
													Code
												</Button>
											</span>
											<Button
												size="sm"
												className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
											>
												<ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
												<a href={project.live} target="_blank" rel="noopener noreferrer">
													Live Demo
												</a>
											</Button>
										</div>
									</div>
								</div>
							</Card>
						))}
					</div>

					{/* View More Projects Button */}
					<div className="text-center mt-12">
						<Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
							View All Projects
							<ExternalLink className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects
