import { Item } from 'rgui-ui-listview';

/**
 * @class Tab
 * @extends Item
 * @param {Object}                  options.data                     =  绑定属性
 * @param {boolean=false}           options.data.selected           <=> 该项是否被选中
 * @param {string=''}               options.data.title               => 该项的工具提示
 * @param {boolean=false}           options.data.disabled            => 禁用该项
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const Tab = Item.extend({
    name: 'tab',
    template: '<div r-hide={this.$outer.data._selected !== this}>{#inc this.$body}</div>',
    /**
     * @protected
     * @override
     */
    config() {
        this.defaults({
            // @inherited selected: false,
            // @inherited disabled: false,
            title: '',
        });
        this.supr();
    },
});

export default Tab;
