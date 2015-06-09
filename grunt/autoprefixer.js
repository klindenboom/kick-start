module.exports = {
    options: {
        // browsers: [],
        // silent: true
        cascade: false
    },
    dev: {
        src: '<%=paths.tmpdev%>/css/**/*.css'
    },
    dist: {
        src: '<%=paths.dist%>/css/**/*.css'
    }
};
