import { ListView } from 'rgui-ui-listview';
import template from './index.rgl';

/**
 * @class Tabs
 * @extends ListView
 * @param {Object}                  options.data                     =  绑定属性
 * @param {number=0}                options.data.current            <=> 当前选择页索引
 * @param {string}                  options.data.titleTemplate      @=> 标题模板
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
        this.defaults({
            // @inherited _list: [],
            // @inherited _selected: undefined,
            current: 0,
            titleTemplate: undefined,
        });
        this.supr();
    },
    /**
     * @protected
     * @override
     */
    watch() {
        this.$watch('current', (current) => {
            this.data._selected = this.data._list[current];

            /**
             * @event change 选择页改变时触发
             * @property {object} sender 事件发送对象
             * @property {number} current 改变后的选择页索引
             * @property {Tab} selected 改变后的选择页
             */
            this.$emit('change', {
                sender: this,
                selected: this.data._selected,
                current,
            });
        });

        this.$watch('_selected', (_selected) => {
            // 设置current
            this.data.current = _selected ? this.data._list.indexOf(_selected) : _selected;
        });
    },
    /**
     * @method select(tab) 选择某一项
     * @public
     * @param  {Tab} tab 选择项
     * @return {void}
     */
    select(tab) {
        if (this.data.readonly || this.data.disabled)
            return;

        this.data._selected = tab;

        /**
         * @event select 选择某一项时触发
         * @property {object} sender 事件发送对象
         * @property {number} current 当前选择页索引
         * @property {Tab} selected 当前选择页
         */
        this.$emit('select', {
            sender: this,
            selected: tab,
            current: this.data._list.indexOf(tab),
        });
    },
});

export default Tabs;
