import { ListView } from 'rgui-ui-listview';
import template from './index.rgl';

/**
 * @class Tabs
 * @extend ListView
 * @param {object}                  options.data                     =  绑定属性
 * @param {object=null}             options.data.selected           <=> 当前选择卡
 * @param {string=null}             options.data.titleTemplate      @=> 标题模板
 * @param {boolean=false}           options.data.readonly            => 是否只读
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const Tabs = ListView.extend({
    name: 'tabs',
    template,
    /**
     * @protected
     * @override
     */
    config() {
        this.data = Object.assign({
            // @inherited _list: [],
            // @inherited _selected: undefined,
            current: 0,
            titleTemplate: undefined,
        }, this.data);
        this.supr();
    },
    /**
     * @protected
     * @override
     */
    watch() {
        this.$watch('current', (newValue, oldValue) => {
            if (!this.data._selected)
                this.data._selected = this.data._list[newValue];

            /**
             * @event change 选择值改变时触发
             * @property {object} sender 事件发送对象
             * @property {Item} selected 改变后的选择项
             * @property {var} current 当前项索引
             */
            this.$emit('change', {
                sender: this,
                selected: this.data._selected,
                current: newValue,
            });
        });

        this.$watch('_selected', (newValue, oldValue) => {
            // 设置current
            this.data.current = newValue ? this.data._list.indexOf(newValue) : newValue;
        });
    },
    /**
     * @protected
     * @override
     */
    init() {
        this.supr();
        //if (!this.data._selected)
        //    this.data._selected = this.data._list[0];
    },
});

export default Tabs;
