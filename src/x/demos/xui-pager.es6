/**
 * @file demos/xui-pager.es6
 * @author leeight
 */

import {defineComponent} from 'san';
import Pager from 'inf-ui/x/components/Pager';

import Row from './Row';

/* eslint-disable */
const template = `<template>
<x-row label="[default]">
    <xui-pager size="{{pager.size}}"
        page="{{pager.page}}"
        count="{{pager.count}}"
        on-change="onPagerChange($event)" />
</x-row>
<x-row label="back-text=<,forward-text=>">
    <xui-pager size="{{pager.size}}"
        page="{{pager.page}}"
        count="{{pager.count}}"
        back-text="<"
        forward-text=">"
        on-change="onPagerChange($event)" />
</x-row>
</template>`;
/* eslint-enable */

export default defineComponent({
    template,
    components: {
        'x-row': Row,
        'xui-pager': Pager
    },
    initData() {
        return {
            pager: {
                size: 10,
                page: 1,
                count: 111
            }
        };
    },
    onPagerChange({pageNo}) {
        this.data.set('pager.page', pageNo);
    }
});