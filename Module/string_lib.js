class StringUtils {

    static capitalize(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
}

export { StringUtils };
