module.exports = function (grunt) {

    var compass = require('compass-importer')

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        tag: {
            banner: '/*!\n' +
                ' * <%= pkg.name %>\n' +
                ' * <%= pkg.title %>\n' +
                ' * @author <%= pkg.author %>\n' +
                ' * @version <%= pkg.version %>\n' +
                ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
                ' */\n'
        },
        sass: {
            options: {
                importer: compass,
                sourceMap: true,
                outputStyle: 'compressed',
                includePaths: require('node-bourbon').includePaths
            },
            dist: {
                files: {
                    'build/Stockninja.css': 'src/scss/main.scss'
                }
            }
        },
        concat: {
            distjs: {
                options: {
                    separator: ';\n'
                },
                src: ['src/client/00jQuery.js',
                    'src/client/lib/*.js',
                    'src/client/env/<%= pkg.environment %>.js',
                    'src/client/src/*.js',
                    'src/client/99jQuery.js'],
                dest: 'build/<%= pkg.name %>.js'
            }
        },
        handlebars: {
            options: {
                processName: function (filePath) {
                    return filePath.replace(/.*\//, '').replace(/\.hbs$/, '');
                },
                processContent: function(content, filepath) {
                    content = content.replace(/^[\x20\t]+/mg, '').replace(/[\x20\t]+$/mg, '');
                    content = content.replace(/^[\r\n]+/, '').replace(/[\r\n]*$/, '\n');
                    return content;
                }
            },
            all: {
                options: {
                    namespace: "SN.templates"
                },
                files: {
                    "src/client/src/20_templates.js": "src/templates/*.hbs"
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                sourceMap: true,
                mangle: true,
                compress: {
                    global_defs: {
                        USEBLACKLIST: true,
                        HIDEON: true
                    }
                }
            },
            build: {
                src: 'build/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            },
            buildForFun: { // not really for fun, just so i can figure out the minified size of each component
                // Grunt will search for "*.js" under "src/" when the "uglify" task
                // runs and build the appropriate src-dest file mappings then, so you
                // don't need to update the Gruntfile when files are added or removed.
                expand: true, // Enable dynamic expansion.
                cwd: 'src/', // Src matches are relative to this path.
                src: ['*.js'], // Actual pattern(s) to match.
                dest: 'min/', // Destination path prefix.
                ext: '.min.js', // Dest filepaths will have this extension.
                extDot: 'last', // Extensions in filenames begin after the first dot
                options: {
                    sourceMap: false
                }
            }
        },
        uncss: {
            dist: {
                files: {
                    'test/SoundninjaTidy.css': 'list.html'
                }
            }
        },
        watch: {
            handlebars: {
                files: ['src/templates/*.hbs'],
                tasks: ['handlebars:all']
            },
            css: {
                files: ['src/scss/*.scss', 'src/scss/lib/*.scss'],
                tasks: ['sass:dist']
            },
            jsclient: {
                files: ['src/client/**/*.js'],
                tasks: ['concat:distjs', 'uglify:build']
            }
        }
        // cat /usr/share/dict/american-english-large  | awk '{ print length, $0 }' | sort -n | cut -d" " -f2- > ~/Documents/soundninja/build/words.txt
    });

    [
        'grunt-contrib-concat',
        'grunt-contrib-handlebars',
        'grunt-contrib-uglify',
        'grunt-contrib-watch',
        'grunt-sass'
    ].forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['sass', 'concat', 'handlebars', 'uglify']);
};
