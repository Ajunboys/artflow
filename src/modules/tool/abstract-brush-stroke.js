'use strict';

import AddCommand from './command/add-command';
import BrushHelper from './helper/brush-helper';

export default class AbstractBrushStroke {

    constructor( isVR, materialId = 'material_with_tex' ) {

        this.mesh = null;

        this.isVR = isVR;
        this.materialId = materialId;

        let optionsHelper = {
            isVR: this.isVR,
            maxSpread: 20,
            brushThickness: this.isVR ? 0.2 : 0.5,
            delta: this.isVR ? 0.01 : 0.005,
            enablePressure: false,
            color: 0x808080,
            materialId: this.materialId
        };

        this._helper = new BrushHelper( optionsHelper );

    }

    update( ) {

    }

    use( data ) {

        this._helper.addPoint(
            data.position.world, data.orientation, data.pressure
        );

    }

    trigger( brushTool ) {

        this.mesh = this._helper.createMesh();
        brushTool.worldGroup.addTHREEObject( this.mesh );

        console.log( this.mesh );

        return new AddCommand( brushTool.worldGroup, this.mesh );

    }

    setColor( hsv ) {

        if ( this._helper )
            this._helper.setColor( hsv );

    }
}
