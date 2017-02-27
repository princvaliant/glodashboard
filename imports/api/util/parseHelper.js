


export default parseHelper = {

    parseOneDelimiter: function(input, delimiter) {
        let result = {};
        let lines = input.split(/(\r\n|\n)/);
        lines.forEach((line) => {
            let split = line.split(delimiter);
            if (split.length === 2) {
                if (!isNaN(split[1])) {
                    result[split[0]] = Number(split[1]);
                } else {
                    let date = moment(split[1], 'M/D/YYYY h:m:s a');
                    if (date.isValid() && date.isAfter('2010-01-01')) {
                        result[split[0]] = date.toDate();
                    } else {
                        result[split[0]] = split[1];
                    }
                }
            }
        });
        return result ;
    }
}