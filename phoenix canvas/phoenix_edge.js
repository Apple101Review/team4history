/**
 * Adobe Helium: symbol definitions
 */
window.symbols = {
"stage": {
   version: "0.1",
   baseState: "Base State",
   initialState: "Base State",
   parameters: {

   },
   content: {
      dom: [
        {
            id:'Image1',
            type:'image',
            rect:[0,0,270,483],
            fill:['rgba(0,0,0,0)','images/phoenix.png'],
        },
      ],
      symbolInstances: [
      ],
   },
   states: {
      "Base State": {
         "#Image1": [
            ["style", "-webkit-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-27.10295px'],
            ["transform", "scaleY", '0.69'],
            ["style", "height", '495.82086530264px'],
            ["transform", "scaleX", '0.69'],
            ["transform", "translateY", '-77.13971px'],
            ["style", "width", '256.10294117647px']
         ],
         "#stage": [
            ["color", "background-color", 'transparent'],
            ["style", "height", '400px'],
            ["style", "width", '192px']
         ]
      }
   },
   actions: {

   },
   bindings: [

   ],
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         timeline: [
            { id: "eid49", tween: [ "transform", "#Image1", "translateX", '-27.10295px', { valueTemplate: undefined, fromValue: '-27.10295px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid8", tween: [ "style", "#Image1", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "linear" },
            { id: "eid55", tween: [ "style", "#Image1", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "linear" },
            { id: "eid56", tween: [ "style", "#Image1", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "linear" },
            { id: "eid57", tween: [ "style", "#Image1", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "linear" },
            { id: "eid58", tween: [ "style", "#Image1", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "linear" },
            { id: "eid53", tween: [ "style", "#stage", "width", '192px', { valueTemplate: undefined, fromValue: '192px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid54", tween: [ "color", "#stage", "background-color", 'transparent', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'transparent'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid12", tween: [ "transform", "#Image1", "scaleY", '0.69', { valueTemplate: undefined, fromValue: '0.69'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid20", tween: [ "style", "#Image1", "height", '784px', { valueTemplate: undefined, fromValue: '495.82086530264px'}], position: 0, duration: 1000, easing: "linear" },
            { id: "eid22", tween: [ "style", "#Image1", "height", '496px', { valueTemplate: undefined, fromValue: '784px'}], position: 1000, duration: 2000, easing: "linear" },
            { id: "eid18", tween: [ "transform", "#Image1", "translateY", '-77.13971px', { valueTemplate: undefined, fromValue: '-77.13971px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid4", tween: [ "style", "#Image1", "width", '256.10294117647px', { valueTemplate: undefined, fromValue: '256.10294117647px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid11", tween: [ "transform", "#Image1", "scaleX", '0.69', { valueTemplate: undefined, fromValue: '0.69'}], position: 0, duration: 0, easing: "linear" }]
      }
   },
}};

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     $.Edge.initialize(symbols);
});
/**
 * Adobe Edge Timeline Launch
 */
$(window).load(function() {
    $.Edge.play();
});
