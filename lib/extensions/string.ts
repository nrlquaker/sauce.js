interface String {
    strip(whitespace: string): string
}

String.prototype.strip = function(whitespace: string): string {
    return this.replace(new RegExp(whitespace, 'g'), '')
}
