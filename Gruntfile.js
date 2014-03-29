module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					trace: true,
					style: 'expand',
				},
				src: "app/stylesheets/scss/style.scss",
				dest: "app/stylesheets/css/style.css"
			}
		},
		clean: {
			files: ["app/stylesheets/css/*.css"]
		},
		watch: {
			files: ['**/*.html', '**/*.scss', '**/*.js'],
				tasks: ['clean', 'sass:dist'],
				options: {
					livereload: true
				}
		},
		cssmin: {
			minify: {
				files: {
					'app/style.min.css': ['app/stylesheets/css/style.css']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.registerTask('w', ['watch']);
	grunt.registerTask('css', ['cssmin:minify']);
	
};