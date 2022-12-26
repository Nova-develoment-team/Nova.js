module.exports = async d => {
    const code = d.command.code
    const log = require('../../classes/Logger.js')
    const inside = d.unpack()
    
    console.log(inside.addBrackets())
    
    return {
        code: code.replaceLast(`$consolelog${inside}`, "")
    }
}