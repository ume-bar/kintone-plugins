(function (PLUGIN_ID) {
    'use strict';

    //アプリの登録画面を表示
    kintone.events.on(['app.record.create.show'], function (event) {
        let record = event['record'];

        //プラグインIDを設定
        let config = kintone.plugin.app.getConfig(PLUGIN_ID);

        //'サンプル'フィールドにプラグインに保存されている設定値を入れる
        record['サンプル'].value = config.text;

        return event;
    }
    );

})(kintone.$PLUGIN_ID);