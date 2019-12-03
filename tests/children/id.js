module.exports = function ({ id }, { tests, test, assert }) {
    tests('id', () => {
        test('id.cardNo()', () => id.cardNo(), (value) => {
            assert.isString(value)
            assert.isLength(value, 18)
            assert.isCardNo(value)
        })
        test('id.cardNo(birthday)', () => {
            const value1 = id.cardNo(20191212) // 年月日
            assert.isString(value1)
            assert.isLength(value1, 18)
            assert.isCardNo(value1)
            assert.isTrue(value1.indexOf('20191212') === 6)

            const value2 = id.cardNo(2019) // 年
            assert.isString(value2)
            assert.isLength(value2, 18)
            assert.isCardNo(value2)
            assert.isTrue(value2.indexOf('2019') === 6)
        })

        test('id.guid()', () => id.guid(), (value) => {
            assert.isString(value)
            assert.isLength(value, 36)
            assert.isMatch(value, /^\w{8}-(\w{4}-){3}\w{12}$/)
        })

        test('id.mobile()', () => id.module(), (value) => {
            assert.isString(value)
            assert.isLength(value, 11)
            assert.isMatch(value, /^1[3-9]\d{9}$/)
        })

        test('id.qq()', () => id.qq(), (value) => {
            assert.isString(value)
            assert.isTrue(value.length >= 5)
            assert.isTrue(value.length <= 11)
            assert.isMatch(value, /^[1-9]\d{10}$/)
        })

        test('id.user()', () => id.user(), (value) => {
            assert.isString(value)
            assert.isLength(value, 6)
            assert.isMatch(value, /^\w+$/)
        })

        test('id.user(length)', () => id.user(8), value => {
            assert.isString(value)
            assert.isLength(value, 8)
            assert.isMatch(value, /^\w+$/)
        })

        test('id.password()', () => id.password(), value => {
            assert.isString(value)
            assert.isLength(value, 16)
            assert.isMatch(/^\S+$/)
        })
        test('id.password(length)', () => id.password(10), value => {
            assert.isString(value)
            assert.isLength(value, 10)
            assert.isMatch(value, /^\S+$/)
        })
    })
}
