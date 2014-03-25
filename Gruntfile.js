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
		uglify: {
			options: {
				mangle: false,
				preserveComments: false,
				compress: {
					drop_console: true
				}
			},
			my_target: {
				files: {
					'app/js/script.min.js': ['app/js/script.js']
				}
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.registerTask('w', ['watch']);
	grunt.registerTask('css', ['clean:css', 'cssmin']);
	
};