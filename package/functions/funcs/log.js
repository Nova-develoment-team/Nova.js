module.exports = async d => {
    const code = d.command.code
    const log = require('../../classes/Logger.js')
    const inside = d.unpack()
    
    log.debug(inside.addBrackets())
    
    return {
        code: code.replaceLast(`$log${inside}`, "")
    }
}
