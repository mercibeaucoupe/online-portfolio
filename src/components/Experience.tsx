import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
	const experiences = [
		{
			title: 'Software Developer',
			company: 'Green By Phone',
			location: 'Cumming, GA',
			period: '2019 - Present',
			description:
				'Leading development of microservices architecture serving 20K+ users. Mentoring junior developers. Owning full project lifecycle from requirements to deployment.',
			technologies: ['Angular', 'React', 'Node.js', '.NET', 'AWS', 'Azure'],
			achievements: [
				'Improved application performance',
				'Completed 400+ user stories',
				'Introduced new technologies to modernize stack',
			],
		},
		{
			title: 'Full Stack Developer',
			company: 'Cook Systems',
			location: 'Memphis, TN',
			period: '2018 - 2019',
			description: 'Developed entrprise level software systems using Java/Spring, node.js and Angular.',
			technologies: ['Angular', 'Java', 'Spring', 'PostgreSQL'],
			achievements: ['Delivered 3 client projects', 'Implemented automated testing'],
		},
	]

	const education = [
		{
			degree: 'Bachelor of Science in Computer Science',
			school: 'Georgia Institute of Technology',
			period: '2014 - 2018',
		},
	]

	return (
		<section id="experience" className="py-20 bg-background">
			<div className="container mx-auto px-6">
				<div className="max-w-4xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							Professional{' '}
							<span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
						</h2>
						<p className="text-xl text-muted-foreground">
							A journey of growth, learning, and impactful contributions to innovative projects.
						</p>
					</div>

					{/* Experience Timeline */}
					<div className="space-y-8 mb-16">
						{experiences.map((exp, index) => (
							<div key={index} className="relative">
								{/* Timeline Line */}
								{index < experiences.length - 1 && (
									<div className="absolute left-8 top-16 w-0.5 h-32 bg-gradient-primary opacity-30"></div>
								)}

								{/* Timeline Dot */}
								<div className="absolute left-6 top-8 w-4 h-4 bg-gradient-primary rounded-full shadow-glow"></div>

								{/* Experience Card */}
								<Card className="ml-16 p-8 bg-gradient-secondary border-primary/20 hover:shadow-card transition-all duration-300">
									<div className="space-y-4">
										{/* Header */}
										<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
											<div>
												<h3 className="text-xl font-bold text-primary">{exp.title}</h3>
												<p className="text-lg font-semibold">{exp.company}</p>
											</div>
											<div className="flex flex-col md:items-end gap-2">
												<div className="flex items-center text-muted-foreground">
													<Calendar className="mr-2 h-4 w-4" />
													{exp.period}
												</div>
												<div className="flex items-center text-muted-foreground">
													<MapPin className="mr-2 h-4 w-4" />
													{exp.location}
												</div>
											</div>
										</div>

										{/* Description */}
										<p className="text-muted-foreground leading-relaxed">{exp.description}</p>

										{/* Technologies */}
										<div className="flex flex-wrap gap-2">
											{exp.technologies.map((tech, techIndex) => (
												<Badge
													key={techIndex}
													variant="outline"
													className="border-primary/50 text-primary"
												>
													{tech}
												</Badge>
											))}
										</div>

										{/* Achievements */}
										<div className="space-y-2">
											<h4 className="font-semibold text-accent">Key Achievements:</h4>
											<ul className="list-disc list-inside space-y-1 text-muted-foreground">
												{exp.achievements.map((achievement, achIndex) => (
													<li key={achIndex}>{achievement}</li>
												))}
											</ul>
										</div>
									</div>
								</Card>
							</div>
						))}
					</div>

					{/* Education Section */}
					<div>
						<h3 className="text-2xl font-bold text-center mb-8">
							<span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
						</h3>
						{education.map((edu, index) => (
							<Card key={index} className="p-8 bg-card/50 border-primary/20">
								<div className="text-center space-y-4">
									<h4 className="text-xl font-bold text-primary">{edu.degree}</h4>
									<p className="text-lg font-semibold">{edu.school}</p>
									<div className="flex justify-center items-center gap-4 text-muted-foreground">
										<span className="flex items-center">
											<Calendar className="mr-2 h-4 w-4" />
											{edu.period}
										</span>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
