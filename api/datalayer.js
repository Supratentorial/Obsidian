///<reference path="interfaces/interfaces.ts"/>
var data;
(function (data) {
    var repository;
    (function (repository) {
        var MatterRepository = (function () {
            function MatterRepository() {
            }
            MatterRepository.prototype.create = function (object) {
            };
            MatterRepository.prototype.remove = function (id) {
            };
            MatterRepository.prototype.update = function (id) {
            };
            MatterRepository.prototype.getById = function (id) {
            };
            return MatterRepository;
        })();
        repository.MatterRepository = MatterRepository;
    })(repository = data.repository || (data.repository = {}));
})(data || (data = {}));
