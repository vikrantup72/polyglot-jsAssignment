function CountvowelandConsonent() {

    CountvowelandConsonent.prototype.count = function(str) {
        if(str===null)
        {
            return str;
        }
        const vowel =['A','E','I','O','U']
        var vcount = 0;
        var ccount = 0;
        var split = str.split(" ");
        var res = split.join("");
        var string = res.toUpperCase()
        for(let i=0; i<string.length; i++)
        {
            if(vowel.includes(string[i]))
            {
                vcount++;
            }
            else{
                ccount++;
            }
        }

        let resss = `${vcount ? vcount : ''} ${vcount ? 'vowels': ''} ${vcount && ccount?'and':''} ${ccount ? ccount : ''} ${ccount?`consonents`:``}`;

        
        return resss.trim()
    }
    
}

module.exports = CountvowelandConsonent;
