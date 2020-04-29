
export default class extends Pantarei.Controller {

  async view_models () {}

  async view_model ({ model_id }) {}

  async view_entries (params) {}

  async view_entry ({ content_id }) {}



  async get_models (params) {}

  async get_model ({ model_id }) {}

  async create_model ({ model }) {}

  async update_model ({ model_id, model }) {}

  async delete_model ({ model_id }) {}



  async get_model_fields ({ model_id }) {}

  async get_model_field ({ model_id, field_id }) {}

  async create_model_field ({ model_id, field }) {}

  async update_model_field ({ model_id, field_id, field }) {}

  async delete_model_field ({ model_id, field_id }) {}



  async get_entries ({ model_id }) {}

  async get_entry ({ entry_id }) {}

  async create_entry ({ model_id, entry }) {}

  async update_entry ({ entry_id, entry }) {}

  async delete_entry ({ entry_id }) {}

}
